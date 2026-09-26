import { useEffect } from "react";
import { supabase } from "./lib/supabase";

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("posts").select("*").limit(1);

      if (error) {
        console.error("Supabase error:", error.message);
        return;
      }

      console.log("Supabase connection successful!", data);
    }

    testConnection();
  }, []);

  return (
    <main>
      <h1>Course Assignment</h1>
      <p>Testing Supabase connection...</p>
    </main>
  );
}

export default App;
