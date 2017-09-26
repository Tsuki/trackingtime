export declare module Event {

  export interface Response {
    status: number;
    version: string;
    message: string;
  }

  export interface Datum {
    type: string;
    start: string;
    loc_start: string;
    end: string;
    loc_end: string;
    duration: number;
    loc_duration: string;
    formated_duration: string;
    service: string;
    service_id?: number;
    customer: string;
    customer_id: number;
    project: string;
    project_id: number;
    skill?: any;
    skill_id?: any;
    task: string;
    task_id: number;
    task_type?: any;
    task_visibility?: any;
    task_list: string;
    due_date?: any;
    estimated_time?: number;
    is_archived: boolean;
    user: string;
    user_id: number;
    timezone: string;
    notes?: any;
    color?: any;
    repeat?: any;
    end_repeat?: any;
    frequency?: any;
    repeat_every?: any;
    hourly_rate?: any;
    is_billable: boolean;
    is_billed: boolean;
    id: number;
    created_at?: any;
    updated_at?: any;
    json?: any;
  }

  export interface event {
    response: Response;
    data: Datum[];
  }

}

