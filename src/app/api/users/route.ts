import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { headers } = request;

  if(headers.get('UltraSecretToken') === "abc") {
    return NextResponse.json([
      {
        id: 1,
        name: 'Joao'
      },
      {
        id: 2,
        name: 'Pedro'
      },
      {
        id: 3,
        name: 'Luis'
      }
    ])
  }
  

  return NextResponse.json({
    error: 'Invalid Token'
  }, {
    status: 401
  })
}
