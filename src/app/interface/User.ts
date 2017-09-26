export declare module User {

  export interface Response {
    status: number;
    version: string;
    message: string;
  }

  export interface Settings {
    show_message: boolean;
    show_step_by_step: boolean;
    language: string;
    currency: string;
    currency_name: string;
    date_format: string;
    time_format: string;
    number_format: string;
    csv_separator: string;
    time_display: string;
    week_starts_on: string;
    timezone: string;
    autostop_timers_at: string;
    email_on_project_updates: boolean;
    email_on_task_updates: boolean;
    email_on_subtask_updates: boolean;
    email_on_comment_updates: boolean;
    weekly_email_report: boolean;
    id: number;
  }

  export interface Permissions {
    can_edit_time_entries: boolean;
    can_edit_projects_and_tasks: boolean;
    can_view_time_entries_from_others: boolean;
    can_view_others: boolean;
  }

  export interface Datum {
    account_id: number;
    name: string;
    surname: string;
    email: string;
    country?: any;
    loc_country?: any;
    role: string;
    loc_role: string;
    avatar_url: string;
    is_archived: boolean;
    is_freelance: boolean;
    is_owner: boolean;
    status: string;
    token: string;
    icalendar_feed: string;
    worked_hours_today: number;
    worked_hours_this_week: number;
    worked_hours_this_month: number;
    loc_worked_hours_today: string;
    loc_worked_hours_this_week: string;
    loc_worked_hours_this_month: string;
    worked_hours: number;
    loc_worked_hours: string;
    billing?: any;
    settings: Settings;
    teams?: any;
    permissions: Permissions;
    invite_link?: any;
    id: number;
    created_at: string;
    updated_at: string;
    json: string;
  }

  export interface user {
    response: Response;
    data: Datum[];
  }

}
