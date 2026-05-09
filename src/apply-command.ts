import { transition, type ApprovalState } from "./state-machine.js";

export interface ApplyCommandInput {
  requesterId: string;
  title: string;
  amountYen?: number;
  eventId: string;
}

export interface ApprovalRequest {
  id: string;
  requesterId: string;
  title: string;
  state: ApprovalState;
  requiredApprovals: number;
  approvals: string[];
}

export function createApprovalRequest(input: ApplyCommandInput): ApprovalRequest {
  const initialState = transition("draft", { type: "submit" });

  return {
    id: `req_${input.eventId}`,
    requesterId: input.requesterId,
    title: input.title,
    state: initialState,
    requiredApprovals: input.amountYen && input.amountYen >= 100000 ? 2 : 1,
    approvals: []
  };
}

