export const GET = async (req) => {
    try {
      // Get the token from the request
      const { token } = await req.json();
  
      // Check if the token exists
      if (token) {
        // Clear the token cookie
        const cookieHeader = `token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
        return new Response(
          JSON.stringify({ message: "Logout successful" }),
          {
            status: 200,
            headers: {
              "Set-Cookie": cookieHeader,
            },
          }
        );
      } else {
        return new Response(JSON.stringify({ message: "No token provided" }), {
          status: 400,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  };
  