export interface Blog {
    id: number;
    title: string;
    content: string;        // Full HTML document as a string
    image: string;          // URL or relative path to the image
    uploaded_at: string;    // ISO formatted timestamp
    updated_at: string;     // ISO formatted timestamp
  }

 export interface NewsData {
    blogs: Blog[];
  }