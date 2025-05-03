export type User = {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    image_url: string;
    primary_email_id: string;
    primary_phone_number_id: string | null;
    created_at: Date;
}