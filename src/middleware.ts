// middleware.ts
import { NextRequest, NextResponse } from 'next/server'


// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: ['/api/payments/:function*'],
}

export function middleware(request: NextRequest) {
    // Call our authentication function to check the request

    const token = request.headers.get('authorization')?.split(" ")[1]

    if (token != process.env.SECRET) {
        // Respond with JSON indicating an error message
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
    }
}