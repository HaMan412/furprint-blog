/**
 * UptimeRobot API Client
 * Fetches monitor status from UptimeRobot API
 */

export type UptimeRobotStatus = | 0 // paused
  | 1 // not checked yet
  | 2 // up
  | 8 // seems down
  | 9; // down

export interface UptimeRobotMonitor {
  id: number;
  friendly_name: string;
  url: string;
  type: number;
  status: UptimeRobotStatus;
  custom_uptime_ratio: string; // e.g., "99.98"
  custom_uptime_ranges: string; // e.g., "30_60_90"
  response_times: Array<{
    datetime: number;
    value: number;
  }>;
  logs: Array<{
    type: number;
    datetime: number;
    duration: number;
  }>;
}

export interface UptimeRobotResponse {
  stat: "ok" | "fail";
  pagination?: {
    offset: number;
    limit: number;
    total: number;
  };
  monitors?: UptimeRobotMonitor[];
  error?: {
    type: string;
    parameter_name: string;
    passed_value: string;
    message: string;
  };
}

/**
 * Fetch monitor data from UptimeRobot API
 * @param apiKey UptimeRobot API key
 * @param monitorIds Array of monitor IDs to fetch
 * @returns UptimeRobot response with monitor data
 */
export async function fetchMonitors(
  apiKey: string,
  monitorIds: string[],
): Promise<UptimeRobotResponse> {
  const url = "https://api.uptimerobot.com/v2/getMonitors";

  const formData = new URLSearchParams();
  formData.append("api_key", apiKey);
  formData.append("format", "json");
  formData.append("monitors", monitorIds.join("-"));
  formData.append("custom_uptime_ratios", "30");
  formData.append("response_times", "1");
  formData.append("response_times_limit", "48"); // Get 48 response times (24 hours with 30min intervals)
  formData.append("logs", "1");
  formData.append("logs_limit", "100"); // Get more logs for history visualization

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: UptimeRobotResponse = await response.json();
    return data;
  }
  catch (error) {
    console.error("UptimeRobot API error:", error);
    throw error;
  }
}

/**
 * Map UptimeRobot status to our status type
 */
export function mapStatus(
  uptimeStatus: UptimeRobotStatus,
): "operational" | "degraded" | "down" {
  switch (uptimeStatus) {
    case 2:
      return "operational";
    case 8:
      return "degraded";
    case 9:
    case 0:
    case 1:
    default:
      return "down";
  }
}

/**
 * Get average response time from response_times array
 */
export function getAverageResponseTime(
  monitor: UptimeRobotMonitor,
): number | null {
  if (!monitor.response_times || monitor.response_times.length === 0) {
    return null;
  }

  const sum = monitor.response_times.reduce((acc, rt) => acc + rt.value, 0);
  return Math.round(sum / monitor.response_times.length);
}

/**
 * Get uptime percentage
 */
export function getUptimePercentage(monitor: UptimeRobotMonitor): number {
  if (!monitor.custom_uptime_ratio) {
    return 0;
  }
  return Number.parseFloat(monitor.custom_uptime_ratio);
}
