type EmailVerification = {
  expire_at: number;
  status: string;
  strategy: string;
  verified_at_client:string;
}

export type ClerkEmail = {
    created_at: number;
  email_address: string;
  id: string;
  updated_at: number;
  verification: EmailVerification;
}


export type User = {
    id: string; //Clerk User ID
    username: string;
    first_name: string;
    last_name: string;
    image_url: string;
    email_addresses: ClerkEmail[];
    created_at: Date;
    is_deleted: boolean;
    is_blocked: boolean;
}