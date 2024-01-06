
import { editors } from '@/data';
import { NextResponse } from 'next/server';

type ResponseData = {
    message: string
}
export async function GET(request: Request) {
    // ...
    return NextResponse.json(editors);
}
