import { Movies } from "./movies";

export interface ApiResponse {
    Search: Movies[];
    totalResults: string;
    Response: string;
}