import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ButtonIcon, Button } from '../Button'; 


describe('Pengujian ButtonIcon dan Button', () => {
  it('memastikan styling dan className ButtonIcon sesuai', () => {
    const { container } = render(
      <ButtonIcon
        className="additional-class"
        icon="call"
        text="Click Me"
        textClassName="text-class"
        bgColor="bg-blue-500"
        hoverBgColor="hover:bg-blue-700"
        onClick={() => {}}
        ariaLabel="button-icon"
      />
    );
    expect(container.firstChild).toHaveClass('additional-class');
  });

  it('memastikan styling dan className Button sesuai', () => {
    const { container } = render(
      <Button
        text="Click Me"
        bgColor="bg-blue-500"
        hoverBgColor="hover:bg-blue-700"
        onClick={() => {}}
      />
    );
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});
