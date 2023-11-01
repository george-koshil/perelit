import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'airports.dat');
    const data = await fs.readFile(filePath, 'utf-8');

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch(e: any) {
    console.error(e.message)
  }
}