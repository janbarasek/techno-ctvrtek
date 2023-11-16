import {NextRequest, NextResponse} from "next/server";
import {CtvrtekEndpointResponse} from "@/app/query/useCtvrtekQuery";

export const GET = (request: NextRequest): NextResponse<CtvrtekEndpointResponse> => {
    const age = Number(request.nextUrl.searchParams.get('age') || 0);

    return NextResponse.json({
        datum: new Date(),
        ip: request.headers.get('x-forwarded-for'),
        bornYear: 2023 - age,
    });
}
