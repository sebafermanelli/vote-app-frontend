export interface Election {
  id?: number;
  description: string;
  totalVotes?: number;
  finalizated?: boolean;
  fechaHoraFin?: Date;
  adminId?: string;
}
