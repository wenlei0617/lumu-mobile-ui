import React from 'react';
import Button from '../index';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Button', () => {
  test('正常挂载', async () => {
    const { getByText } = render(<Button>普通按钮</Button>);
    expect(getByText('普通按钮')).toBeInTheDocument();
  });

  test('普通按钮', async () => {
    const { asFragment } = render(<Button>普通按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('图标按钮', async () => {
    const { asFragment } = render(<Button icon="😀">图标按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('小按钮', async () => {
    const { asFragment } = render(<Button size="sm">小按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('中按钮', async () => {
    const { asFragment } = render(<Button size="md">中按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('大按钮', async () => {
    const { asFragment } = render(<Button size="lg">大按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('矩形按钮', async () => {
    const { asFragment } = render(<Button shape="rect">矩形按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('圆形按钮', async () => {
    const { asFragment } = render(<Button shape="round">圆形按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('块级按钮', async () => {
    const { asFragment } = render(<Button block>块级按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('禁止按钮', async () => {
    const { asFragment } = render(<Button disabled>禁止按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('加载按钮', async () => {
    const { asFragment } = render(<Button loading>加载按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('主题按钮', async () => {
    const { asFragment } = render(<Button type="primary">主题按钮</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('点击按钮', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>点击按钮</Button>);
    fireEvent.click(screen.getByText('点击按钮'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
