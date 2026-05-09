export type ApprovalState = "draft" | "pending" | "approved" | "rejected" | "archived";

export type ApprovalEvent =
  | { type: "submit" }
  | { type: "approve"; approverId: string }
  | { type: "reject"; approverId: string; reason: string }
  | { type: "archive" };

export function transition(current: ApprovalState, event: ApprovalEvent): ApprovalState {
  if (current === "draft" && event.type === "submit") return "pending";
  if (current === "pending" && event.type === "approve") return "approved";
  if (current === "pending" && event.type === "reject") return "rejected";
  if ((current === "approved" || current === "rejected") && event.type === "archive") return "archived";
  throw new Error(`Invalid transition: ${current} -> ${event.type}`);
}

