export default async (req, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method === 'POST') {
    try {
      const body = await req.json();
      // Aquí se puede guardar el pedido en una base de datos
      // Por ahora simplemente lo devolvemos confirmado
      return new Response(JSON.stringify({ ok: true, pedido: body }), { status: 200, headers });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 400, headers });
    }
  }

  return new Response(JSON.stringify({ ok: true, message: 'Pedidos API activa' }), { status: 200, headers });
};

export const config = { path: '/api/pedidos' };
