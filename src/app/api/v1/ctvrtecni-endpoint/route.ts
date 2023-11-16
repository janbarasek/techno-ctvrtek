import {NextRequest, NextResponse} from "next/server";

export const GET = (request: NextRequest) => {
    return NextResponse.json({
        datum: new Date(),
        ip: request.ip || 'localhost',
    });
}
