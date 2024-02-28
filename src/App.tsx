import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from '@/redux/provider';
import { Button } from '@/components/ui/button';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <div className='flex gap-x-5'>
        <Button>Button</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
      </div>
    </Providers>
  </React.StrictMode>,
);
