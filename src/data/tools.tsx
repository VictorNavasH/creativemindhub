
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { creativeTools } from "./creative-tools";

export const tools: Tool[] = [
  ...platformTools,
  ...marketingTools,
  ...analyticsTools,
  ...workspaceTools,
  ...creativeTools
] as const;
