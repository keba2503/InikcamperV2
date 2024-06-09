import { NextRequest, NextResponse } from 'next/server';
import mysql, { Connection, RowDataPacket } from 'mysql2/promise';

interface FileRow extends RowDataPacket {
    id: number;
    name: string;
    // Add other fields as necessary
}

async function getDatos(): Promise<FileRow[]> {
    const connection: Connection = await mysql.createConnection({
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        port: parseInt(process.env.DB_PORT as string, 10),
        database: process.env.DB_DATABASE as string,
    });

    const [rows] = await connection.execute<FileRow[]>('SELECT * FROM guide_user');
    return rows;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const datos = await getDatos();
        return NextResponse.json(datos, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
