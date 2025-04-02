import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { TypedObject } from "sanity";

export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    body: TypedObject | TypedObject[]
    // mainImage: string | StaticImport
}