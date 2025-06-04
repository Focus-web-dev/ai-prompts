import { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Create a new Web Worker instance
    const worker = new Worker(new URL("./worker.js", import.meta.url)); // Using import.meta.url for modern module resolution

    // Listen for messages from the worker
    worker.onmessage = (event) => {
      setD(event.data); // Set the result from the worker
      worker.terminate(); // Terminate the worker once the calculation is done
    };

    // Send a message to the worker to start the calculation
    worker.postMessage("startCalculation");

    // Clean up the worker if the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d !== null ? d : "Calculating..."}</div>;
}
