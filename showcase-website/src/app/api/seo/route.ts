import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'src', 'data', 'seoData.json');
    const file = await fs.readFile(dataPath, 'utf8');
    return NextResponse.json(JSON.parse(file));
  } catch (error) {
    return NextResponse.json({});
  }
}

export async function PUT(req: Request) {
  try {
    const newData = await req.json();
    const dataPath = path.join(process.cwd(), 'src', 'data', 'seoData.json');
    
    let currentData = {};
    try {
      const file = await fs.readFile(dataPath, 'utf8');
      currentData = JSON.parse(file);
    } catch (e) {
      // Ignored if doesn't exist
    }

    const updatedData = { ...currentData, ...newData };
    
    // Ensure dir exists
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ success: true, data: updatedData });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}