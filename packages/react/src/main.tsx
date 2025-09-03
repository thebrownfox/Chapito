import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Chapito from './Chapito';  // Import your component

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found in the document");
}

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <div style={{ padding: '20px' }}>
            <h1>Chapito Test</h1>
            <Chapito speed={20} gap={10} direction="left" draggable={true}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Chapito>
        </div>
    </StrictMode>
);