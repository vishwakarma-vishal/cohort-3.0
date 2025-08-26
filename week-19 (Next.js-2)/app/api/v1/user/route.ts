import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export async function GET() {
    const response = await client.user.findMany();
    return Response.json( {
        data: response,
        message: "All user fetched successfully."
    })
}

export async function POST(req: Request, res: NextApiResponse) {
    const {email, password} = await req.json();

    const response = await client.user.create({
        data: {
            email: email,
            password: password
        }
    })

    return Response.json( {
        data: response,
        message: "User signed in"
    })
}

