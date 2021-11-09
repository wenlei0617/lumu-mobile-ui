import React, { useState } from 'react';
// @ts-ignore
import { Button } from 'lumu-mobile-ui';
import './index.css';

const SIZE_CONFIG = [
  { value: 'sm', label: '小' },
  { value: 'md', label: '中' },
  { value: 'lg', label: '大' },
];

const THEME_CONFIG = [
  { value: 'default', label: '默认色' },
  { value: 'primary', label: '主题色' },
];

const BLOCK_CONFIG = [
  { value: '0', label: '行类元素' },
  { value: '1', label: '块级元素' },
];

const SHAPE_CONFIG = [
  { value: 'rect', label: '矩形' },
  { value: 'radius', label: '弧形' },
  { value: 'round', label: '圆形' },
];

const Radio: React.FC<{
  label: string;
  value: any;
  onChange: (value: any) => void;
  checked: boolean;
  name: string;
}> = ({ label, value, onChange, checked, name }) => {
  return (
    <div>
      <label htmlFor={value}>{label}</label>
      <input
        id={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        checked={checked}
        type="radio"
        name={name}
        value={value}
      />
    </div>
  );
};

export default () => {
  const [size, setSize] = useState('md');
  const [theme, setTheme] = useState('default');
  const [block, setBlock] = useState('0');
  const [shape, setShape] = useState('rect');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState('默认按钮');
  const [icon, setIcon] = useState(false);
  return (
    <div>
      <div className="radio">
        <span>按大小：</span>
        {SIZE_CONFIG.map((item) => (
          <Radio
            key={item.value}
            {...item}
            name="size"
            onChange={setSize}
            checked={item.value === size}
          />
        ))}
      </div>
      <div className="radio">
        <span>按主题：</span>
        {THEME_CONFIG.map((item) => (
          <Radio
            key={item.value}
            {...item}
            name="theme"
            onChange={setTheme}
            checked={item.value === theme}
          />
        ))}
      </div>
      <div className="radio">
        <span>按空间：</span>
        {BLOCK_CONFIG.map((item, index) => (
          <Radio
            key={index}
            {...item}
            name="block"
            onChange={setBlock}
            checked={block === item.value}
          />
        ))}
      </div>
      <div className="radio">
        <span>按形状：</span>
        {SHAPE_CONFIG.map((item, index) => (
          <Radio
            key={index}
            {...item}
            name="shape"
            onChange={setShape}
            checked={shape === item.value}
          />
        ))}
      </div>
      <div className="radio">
        <span>是否Loading：</span>
        <input
          type="checkbox"
          name="loading"
          checked={loading}
          onChange={(e) => setLoading(e.currentTarget.checked)}
        />
      </div>
      <div className="radio">
        <span>是否禁用：</span>
        <input
          type="checkbox"
          name="disabled"
          checked={disabled}
          onChange={(e) => setDisabled(e.currentTarget.checked)}
        />
      </div>
      <div className="radio">
        <span>是否使用icon：</span>
        <input
          type="checkbox"
          name="icon"
          checked={icon}
          onChange={(e) => setIcon(e.currentTarget.checked)}
        />
      </div>
      <div className="radio">
        <span>文字内容：</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <div>
        <Button
          onClick={() => alert('点击')}
          type={theme}
          size={size}
          block={block === '1'}
          shape={shape}
          loading={loading}
          disabled={disabled}
          icon={icon ? <span>🤮</span> : null}
        >
          {text}
        </Button>
      </div>
    </div>
  );
};
