export interface Election {
  id?: number;
  description: string;
  total_votes?: number;
  finalizated?: boolean;
  fecha_hora_fin?: Date;
  admin_id?: string;
}
