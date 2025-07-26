/**
 * 应用主组件
 * 配置路由和页面导航
 */
import { HashRouter, Route, Routes } from 'react-router';
import HomePage from './pages/Home';
import IronPot from './pages/IronPot';
import TeflonPot from './pages/TeflonPot';
import ProductManual from './pages/ProductManual';
import './i18n';

/**
 * 主应用组件
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iron-pot" element={<IronPot />} />
        <Route path="/teflon-pot" element={<TeflonPot />} />
        <Route path="/manual" element={<ProductManual />} />
      </Routes>
    </HashRouter>
  );
}
