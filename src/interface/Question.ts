import { Category } from "./category";

export interface Question {
    category: Category;
    question: string;
    answer: number;
    hint: string;
}
