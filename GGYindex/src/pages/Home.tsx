/**
 * 拾光科技锅体选配主页面
 * 展示滑动卷轴功能选择器
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { 
  ChefHat, 
  Flame, 
  Shield, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  Clock, 
  Droplets, 
  Eye, 
  Utensils,
  CheckCircle,
  XCircle,
  Settings,
  Play,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Languages
} from 'lucide-react';

/**
 * 主页组件 - 功能选择和内容展示页面
 */
export default function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPot, setSelectedPot] = useState(''); // 'iron' or 'teflon'

  /**
   * 切换语言函数
   */
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  // 卷轴选项配置
  const scrollItems = [
    {
      id: 'video',
      title: t('scroll.video.title'),
      subtitle: t('scroll.video.subtitle'),
      icon: Play,
      gradient: 'from-blue-500 to-purple-500',
      description: t('scroll.video.description')
    },
    {
      id: 'installation', 
      title: t('scroll.installation.title'),
      subtitle: t('scroll.installation.subtitle'),
      icon: Settings,
      gradient: 'from-green-500 to-teal-500',
      description: t('scroll.installation.description')
    },
    {
      id: 'potGuide',
      title: t('scroll.potGuide.title'), 
      subtitle: t('scroll.potGuide.subtitle'),
      icon: ChefHat,
      gradient: 'from-orange-500 to-red-500',
      description: t('scroll.potGuide.description')
    },
    {
      id: 'supplies',
      title: t('scroll.supplies.title'),
      subtitle: t('scroll.supplies.subtitle'), 
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      description: t('scroll.supplies.description')
    }
  ];

  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  // 首页内容
  const renderHomePage = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* LOGO渐变背景 */}
      <div className="absolute inset-0 flex items-start justify-end pr-4 md:pr-8 pt-10 md:pt-20 opacity-5">
        <img 
          src="https://i.postimg.cc/0QVWnQL7/9abeafbcae27ae24737cac6e9a2b311.jpg"
          alt="拾光科技LOGO背景"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-full"
        />
      </div>

      {/* 语言切换按钮 */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 group"
          title={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
        >
          <Languages className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="text-white text-sm font-medium">
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </span>
        </button>
      </div>

      {/* 主要内容区域 */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center relative z-10">
        {/* 品牌标题 */}
        <div className="mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-8 md:mb-12">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500 p-2">
              <img 
                src="https://i.postimg.cc/0QVWnQL7/9abeafbcae27ae24737cac6e9a2b311.jpg"
                alt={t('brand.name')}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent mb-3 md:mb-4 tracking-tight md:tracking-tighter leading-tight md:leading-none drop-shadow-2xl">
                {t('brand.name')}
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-4">
                <div className="h-1 w-16 md:w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <p className="text-blue-200 text-xl md:text-2xl font-normal md:font-light tracking-wide md:tracking-wider">{t('brand.tagline')}</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-100/90 text-lg md:text-xl font-normal md:font-light leading-loose md:leading-relaxed tracking-normal md:tracking-wide px-6 md:px-0">
              {t('brand.description')}
            </p>
          </div>
        </div>

        {/* 滑动卷轴选择器 */}
        <div className="max-w-6xl w-full relative overflow-hidden">
          {/* 左右圆形切换按钮 */}
          <button 
            onClick={() => setCurrentScrollIndex(Math.max(0, currentScrollIndex - 1))}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            disabled={currentScrollIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          
          <button 
            onClick={() => setCurrentScrollIndex(Math.min(scrollItems.length - 1, currentScrollIndex + 1))}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
            disabled={currentScrollIndex === scrollItems.length - 1}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* 卷轴内容区域 */}
          <div className="overflow-hidden relative mx-8 md:mx-16" style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}>
            {/* 动态背景装饰 */}
            <div 
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                background: `radial-gradient(ellipse at ${50 + (currentScrollIndex - 1.5) * 15}% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
              }}
            ></div>
            
            <div 
              className="flex transition-transform duration-700 ease-out relative z-10 py-2 md:py-4"
              style={{ 
                transform: `translateX(-${currentScrollIndex * 100}%)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
                {scrollItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="w-full flex-shrink-0"
                    >
                      <div 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('卡片点击:', item.id); // 调试日志
                          if (item.id === 'video') {
                            setCurrentPage('video');
                          } else if (item.id === 'installation') {
                            setCurrentPage('installation');
                          } else if (item.id === 'potGuide') {
                            setCurrentPage('potGuide');
                          } else if (item.id === 'supplies') {
                            setCurrentPage('supplies');
                          }
                        }}
                        className={`bg-gradient-to-br ${item.gradient} cursor-pointer transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl h-72 md:h-96 flex flex-col items-center justify-center text-center group relative overflow-hidden`}
                        style={{
                          transform: `scale(${index === currentScrollIndex ? (window.innerWidth < 768 ? 1.1 : 1.2) : Math.max(0.6, 1 - Math.abs(index - currentScrollIndex) * 0.3)}) 
                                     translateZ(${index === currentScrollIndex ? '50px' : '0px'})
                                     rotateY(${(index - currentScrollIndex) * 8}deg)`,
                          transformOrigin: 'center center',
                          filter: `brightness(${index === currentScrollIndex ? 1.1 : Math.max(0.7, 1 - Math.abs(index - currentScrollIndex) * 0.2)})`,
                          zIndex: index === currentScrollIndex ? 10 : Math.max(1, 5 - Math.abs(index - currentScrollIndex)),
                          willChange: 'transform, filter',
                          backfaceVisibility: 'hidden',
                          perspective: '1000px'
                        }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-xl rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-3 px-3 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-white/85 text-base md:text-lg mb-3 md:mb-4 px-3 font-medium tracking-wide">
                          {item.subtitle}
                        </p>
                        <p className="text-white/90 text-base md:text-base px-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="mt-5 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm md:text-sm font-medium tracking-wide">{t('common.enter')}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>

          {/* 现代化指示器 */}
          <div className="flex justify-center items-center space-x-3 pt-6 pb-2">
            {scrollItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScrollIndex(index)}
                className={`relative transition-all duration-500 ease-out ${
                  index === currentScrollIndex 
                    ? 'w-8 h-2' 
                    : 'w-2 h-2 hover:w-3 hover:h-3'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-500 ease-out ${
                  index === currentScrollIndex 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/30' 
                    : 'bg-white/30 hover:bg-white/50 hover:shadow-md'
                }`}></div>
                {index === currentScrollIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-sm animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 宣传语 */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-white/90 text-xl md:text-2xl font-normal md:font-light tracking-wide px-6 leading-relaxed">{t('brand.slogan')}</p>
        </div>
      </div>
    </div>
  );

  // 宣传片页面
  const renderVideoPage = () => (
    <>
      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl text-white rounded-2xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-12 border border-blue-400/30">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{t('video.title')}</h2>
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide">{t('video.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl">
        {/* B站宣传片视频播放器 */}
        <div className="mb-6">
          <div className="bg-black/20 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1Fggpz3E4k&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full"
              title="拾光科技智能烹饪机宣传片"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/80 text-lg">
              {t('video.fullTitle')}
            </p>
            <a 
              href="https://www.bilibili.com/video/BV1Fggpz3E4k/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 mt-2"
            >
              <span>{t('video.watchOnBilibili')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* 5大核心功能 */}
        <div className="space-y-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-3xl font-bold text-white mb-4 leading-tight">{t('video.coreFeatures.title')}</h3>
            <p className="text-white/85 text-lg md:text-lg font-normal leading-relaxed px-4">{t('video.coreFeatures.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 全自动 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Settings className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center leading-tight">
                {i18n.language === 'zh' ? '全自动' : 'Fully Automatic'}
              </h4>
              <p className="text-white/90 text-center leading-loose text-base md:text-base px-2">
                {i18n.language === 'zh' ? (
                  <>烹饪的每一个环节，一直到最后的清洗均为自动作业，所以<span className="text-blue-300 font-semibold">轻松简单</span></>
                ) : (
                  <>Every aspect of cooking, including final cleaning, is automated, making it <span className="text-blue-300 font-semibold">easy and simple</span></>
                )}
              </p>
            </div>

            {/* 全封闭 */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-green-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center leading-tight">
                {i18n.language === 'zh' ? '全封闭' : 'Fully Enclosed'}
              </h4>
              <p className="text-white/90 text-center leading-loose text-base md:text-base px-2">
                {i18n.language === 'zh' ? (
                  <>无明火，无油烟，隔离作业，全程可视，所以<span className="text-green-300 font-semibold">安全，卫生，健康，环保</span></>
                ) : (
                  <>No open flame, no fumes, isolated operation, fully visible, ensuring <span className="text-green-300 font-semibold">safety, hygiene, health, and environmental protection</span></>
                )}
              </p>
            </div>

            {/* 大师级 */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-orange-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <ChefHat className="w-8 h-8 text-orange-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center leading-tight">
                {i18n.language === 'zh' ? '大师级' : 'Master Level'}
              </h4>
              <p className="text-white/90 text-center leading-loose text-base md:text-base px-2">
                {i18n.language === 'zh' ? (
                  <>火力，时长，时序，调味品精准控制，复刻大师技艺，AI算法加持，所以<span className="text-orange-300 font-semibold">每一道出品都是大师级</span></>
                ) : (
                  <>Precise control of heat, timing, sequence, and seasoning, replicating master techniques with AI algorithm assistance, ensuring <span className="text-orange-300 font-semibold">every dish is master-level</span></>
                )}
              </p>
            </div>

            {/* 工艺级 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center leading-tight">
                {i18n.language === 'zh' ? '工艺级' : 'Craft Level'}
              </h4>
              <p className="text-white/90 text-center leading-loose text-base md:text-base px-2">
                {i18n.language === 'zh' ? (
                  <>现代科技与美学的无缝融合，符合人体工学，兼具实用性与艺术性。以它为核心装修出来的中式厨房：<span className="text-purple-300 font-semibold">美观，时尚，简洁，大方，堪称工艺级</span></>
                ) : (
                  <>Seamless integration of modern technology and aesthetics, ergonomic design, combining practicality and artistry. Chinese kitchens centered around it are <span className="text-purple-300 font-semibold">beautiful, fashionable, simple, elegant, and truly craft-level</span></>
                )}
              </p>
            </div>

            {/* 大数据 */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl md:col-span-2">
              <div className="w-16 h-16 bg-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Eye className="w-8 h-8 text-cyan-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center leading-tight">
                {i18n.language === 'zh' ? '大数据' : 'Big Data'}
              </h4>
              <p className="text-white/90 text-center leading-loose text-base md:text-base px-2">
                {i18n.language === 'zh' ? (
                  <>强大的互联网功能，海量的数据收集能力，AI深度赋能，为家庭营养摄取的规划，执行，评价，建议，优化提供<span className="text-cyan-300 font-semibold">专家级建议</span>，为社会食材供应链建设提供数据支撑</>
                ) : (
                  <>Powerful internet functionality, massive data collection capabilities, AI deep empowerment, providing <span className="text-cyan-300 font-semibold">expert-level suggestions</span> for family nutrition planning, execution, evaluation, recommendations, and optimization, supporting data infrastructure for social food supply chain construction</>
                )}
              </p>
            </div>
          </div>

          {/* 底部总结 */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 border border-indigo-400/30 text-center mt-8">
            <h5 className="text-2xl md:text-2xl font-bold text-white mb-4 leading-tight">科技赋能，匠心传承</h5>
            <p className="text-white/90 text-lg md:text-lg leading-relaxed px-4">
              拾光科技智能烹饪机，让每一位用户都能轻松烹制大师级美食
            </p>
          </div>
        </div>
      </div>
    </>
  );

  // 设备安装教程页面
  const renderInstallationPage = () => (
    <>
      <div className="bg-gradient-to-r from-green-600/90 to-teal-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-green-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">{t('installation.title')}</h2>
            <p className="text-white text-xl">{t('installation.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        {/* B站安装教程视频播放器 */}
        <div className="mb-6">
          <div className="bg-black/20 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1RV8Mz6EGt&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full"
              title="拾光科技设备安装、使用及日常保养教程"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/80 text-lg">
              {t('installation.videoTitle')}
            </p>
            <a 
              href="https://www.bilibili.com/video/BV1RV8Mz6EGt?t=559.8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 mt-2"
            >
              <span>{t('installation.watchOnBilibili')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-xl font-bold text-white mb-4">{t('installation.videoContent')}</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{i18n.language === 'zh' ? '设备拆箱和部件检查' : 'Equipment unboxing and parts inspection'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{i18n.language === 'zh' ? '安装位置选择和准备' : 'Installation location selection and preparation'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{i18n.language === 'zh' ? '电源连接和安全检查' : 'Power connection and safety inspection'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{i18n.language === 'zh' ? '初次开机和功能测试' : 'Initial startup and function testing'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-bold text-white mb-4">{t('installation.precautions')}</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>{i18n.language === 'zh' ? '确保工作台面平稳牢固' : 'Ensure work surface is stable and secure'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>{i18n.language === 'zh' ? '保持设备周围通风良好' : 'Maintain good ventilation around equipment'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>{i18n.language === 'zh' ? '使用专用电源插座' : 'Use dedicated power outlet'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>{i18n.language === 'zh' ? '安装完成后进行功能检测' : 'Perform function test after installation'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">{t('installation.quickSteps.title')}</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 text-center border border-green-400/30">
            <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-300 text-xl font-bold">1</span>
            </div>
            <h5 className="font-bold text-white mb-2">{t('installation.quickSteps.unboxing.title')}</h5>
            <p className="text-white text-sm">{t('installation.quickSteps.unboxing.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center border border-blue-400/30">
            <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-300 text-xl font-bold">2</span>
            </div>
            <h5 className="font-bold text-white mb-2">{t('installation.quickSteps.positioning.title')}</h5>
            <p className="text-white text-sm">{t('installation.quickSteps.positioning.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 text-center border border-orange-400/30">
            <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-300 text-xl font-bold">3</span>
            </div>
            <h5 className="font-bold text-white mb-2">{t('installation.quickSteps.power.title')}</h5>
            <p className="text-white text-sm">{t('installation.quickSteps.power.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center border border-purple-400/30">
            <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-300 text-xl font-bold">4</span>
            </div>
            <h5 className="font-bold text-white mb-2">{t('installation.quickSteps.testing.title')}</h5>
            <p className="text-white text-sm">{t('installation.quickSteps.testing.description')}</p>
          </div>
        </div>
      </div>
    </>
  );

  // 锅体选配指南页面（包含选择功能）
  const renderPotGuidePage = () => (
    <>
      <div className="bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-orange-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">{t('pot.guide.title')}</h2>
            <p className="text-white text-xl">{t('pot.guide.subtitle')}</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-xl">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-white mb-2">{t('pot.guide.motto')}</p>
            <p className="text-lg text-white/90">
              {t('pot.guide.description')}
            </p>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-white text-center">
            {t('pot.guide.professional')}
          </p>
        </div>
      </div>

      {!selectedPot ? (
        // 锅体选择页面
        <>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('pot.guide.selectTitle')}</h3>
            <p className="text-white/80 text-lg">{t('pot.guide.selectDescription')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 氮化铁锅卡片 */}
            <div 
              onClick={() => setSelectedPot('iron')}
              className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-4xl p-10 h-full border border-white/20 shadow-2xl hover:shadow-orange-500/25 hover:border-orange-400/50 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Flame className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-2 tracking-tight">
                        {t('pot.iron.name')}
                      </h4>
                      <p className="text-orange-300/80 text-lg font-light tracking-wider uppercase">{t('pot.iron.subtitle')}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-8 h-8 text-orange-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-500" />
                </div>

                <div className="relative mb-10 h-56 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl overflow-hidden">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/6c8bd4a4-90d1-4203-b9a2-52cdef3a6734.jpg"
                    alt="氮化铁锅"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold tracking-wide shadow-lg">
                      {t('pot.iron.tag')}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-white/95 text-2xl font-medium leading-relaxed tracking-wide">
                    {t('pot.iron.description')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <ChefHat className="w-6 h-6 text-orange-400" />
                      <span className="text-orange-200/90 text-lg font-light">{t('pot.iron.suitable')}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                      <span className="text-orange-200/90 text-lg font-light">{t('pot.iron.skill')}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-orange-300/80 text-lg font-light group-hover:text-white transition-colors duration-500 tracking-wide">
                      {t('pot.guide.clickToView')} →
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 特氟龙不粘锅卡片 */}
            <div 
              onClick={() => setSelectedPot('teflon')}
              className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-4xl p-10 h-full border border-white/20 shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/50 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 tracking-tight">
                        {t('pot.teflon.name')}
                      </h4>
                      <p className="text-blue-300/80 text-lg font-light tracking-wider uppercase">{t('pot.teflon.subtitle')}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-8 h-8 text-blue-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-500" />
                </div>

                <div className="relative mb-10 h-56 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl overflow-hidden">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/f0c23e64-4796-4c0e-a3a7-9c03e1385b85.jpg"
                    alt="特氟龙不粘锅"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold tracking-wide shadow-lg">
                      {t('pot.teflon.tag')}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-white/95 text-2xl font-medium leading-relaxed tracking-wide">
                    {t('pot.teflon.description')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <ChefHat className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-200/90 text-lg font-light">{t('pot.teflon.suitable')}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Shield className="w-6 h-6 text-cyan-400" />
                      <span className="text-blue-200/90 text-lg font-light">{t('pot.teflon.protection')}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-blue-300/80 text-lg font-light group-hover:text-white transition-colors duration-500 tracking-wide">
                      {t('pot.guide.clickToView')} →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : selectedPot === 'iron' ? (
        // 氮化铁锅详细内容
        <>
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setSelectedPot('')}
              className="flex items-center space-x-2 text-orange-300 hover:text-white transition-colors duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{t('pot.guide.backToSelection')}</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-orange-400/30">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">{t('pot.iron.title')}</h3>
                <p className="text-white text-xl">{t('pot.iron.guideSubtitle')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 推荐菜谱 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="w-8 h-8 text-orange-400" />
                <h4 className="text-2xl font-bold text-white">推荐菜谱</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Flame className="w-6 h-6 text-red-400" />
                    <h5 className="text-xl font-bold text-white">爆炒类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 葱爆羊肉</p>
                    <p>• 辣子鸡丁</p>
                    <p>• 爆炒时蔬</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-6 h-6 text-orange-400" />
                    <h5 className="text-xl font-bold text-white">烧焖类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 红烧肉</p>
                    <p>• 黄焖鸡</p>
                    <p>• 土豆烧牛腩</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-6 border border-green-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-6 h-6 text-green-400" />
                    <h5 className="text-xl font-bold text-white">干煸类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 干煸豆角</p>
                    <p>• 干烧鱼</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用须知 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h4 className="text-2xl font-bold text-white">使用须知</h4>
              </div>

              <div className="space-y-8">
                {/* 控制火候与空烧 */}
                <div className="border-l-4 border-blue-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">控制火候与空烧</h5>
                  <div className="space-y-4 text-white/90">
                    <p>铁锅导热快，建议用中小火预热，避免长时间空烧损伤锅体。炒菜前先将锅烧热再倒油，能有效增强物理不粘效果。</p>
                    <p>先用中小火烹饪（3到4档）再转至大火（5档或以上），直接大火容易让食物焦糊，且会损伤锅面。</p>
                  </div>
                </div>

                {/* 粘锅应对技巧 */}
                <div className="border-l-4 border-orange-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">粘锅应对技巧</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-blue-300 mb-2">高蛋白食材</h6>
                        <p className="text-white/80 text-sm">鸡蛋、嫩豆腐、鱼皮：掌握"热锅冷油"技巧，或对食材进行拍粉等预处理。</p>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-green-300 mb-2">姜片防粘</h6>
                        <p className="text-white/80 text-sm">若菜系涉及姜片，炒或炸前，用姜片擦拭热锅锅底。</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-yellow-300 mb-2">高淀粉食材</h6>
                        <p className="text-white/80 text-sm">土豆、山药：切好后用清水冲洗掉表面淀粉，并尽量沥干水分。</p>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-red-300 mb-2">高糖类菜系</h6>
                        <p className="text-white/80 text-sm">适当增加用油量，并快速翻炒。年糕、粉条类：炒前先过水使其表面湿润，并多放油快炒。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 生锈风险 */}
                <div className="border-l-4 border-red-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">生锈风险</h5>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <p className="text-white/90">请勿长时间浸泡锅体或用其存放食物过夜。避免烹煮番茄、醋等强酸性菜肴，以保护锅体表面的油膜。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 养锅教程 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-400" />
                <h4 className="text-2xl font-bold text-white">养锅教程：让它成为您的"传家宝"</h4>
              </div>

              <div className="space-y-8">
                {/* 首次开锅 */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-4">第一步：首次开锅（至关重要）</h5>
                  <p className="text-green-300 mb-6 font-medium">目的：去除工业防锈层，建立初始油膜，为日后的"物理不粘"打下坚实基础。</p>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">1. 洁锅</h6>
                      <p className="text-white/80 text-sm">流动温水下，用洗洁精和百洁布彻底洗净锅内外，擦干。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Flame className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">2. 烘干</h6>
                      <p className="text-white/80 text-sm">将锅体安放回烹饪机内，选择"手动模式"，调至【3档】运行约1分钟。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">3. 润锅</h6>
                      <p className="text-white/80 text-sm">倒入适量食用油，启动预设的开锅菜谱，低速运转约2分钟。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">4. 静置</h6>
                      <p className="text-white/80 text-sm">待锅冷却后，用厨房纸巾擦净多余油分即可。</p>
                    </div>
                  </div>
                </div>

                {/* 日常养锅 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-4">第二步：日常养锅（简单，但需坚持）</h5>
                  <p className="text-blue-300 mb-6 font-medium">目的：巩固并加厚油膜，让铁锅越用越黑亮、越用越不粘。</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Droplets className="w-6 h-6 text-blue-400" />
                        <h6 className="text-xl font-bold text-white">清洗</h6>
                      </div>
                      <div className="space-y-3 text-white/90">
                        <p>• 烹饪后，趁锅有余温时用温水和软质工具（如竹刷、海绵、软布）清洗</p>
                        <p>• 尽量少用或不用洗洁精，以保护油膜</p>
                        <p>• 若不慎粘锅，可用温水泡软后再清洗</p>
                        <p>• 切忌使用钢丝球等硬物刮擦</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Shield className="w-6 h-6 text-green-400" />
                        <h6 className="text-xl font-bold text-white">养护</h6>
                      </div>
                      <div className="space-y-3 text-white/90">
                        <p><strong className="text-green-300">烘干是关键：</strong>清洗后，务必将锅体放回烹饪机内运行1-2分钟，或用干布彻底擦干</p>
                        <p><strong className="text-yellow-300">涂油是升华：</strong>烘干后趁有余温，在锅内壁涂抹一层薄薄的食用油</p>
                        <p><strong className="text-blue-300">长期存放：</strong>若长期不用，涂抹一层食用油后存放于干燥处</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 关于生锈 */}
                <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/30">
                  <h6 className="text-xl font-bold text-white mb-4">关于生锈</h6>
                  <p className="text-white/90">万一出现锈迹，可用白醋或百洁布擦除，再完整执行一遍"首次开锅"流程，即可焕然一新。</p>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        // 特氟龙不粘锅详细内容
        <>
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setSelectedPot('')}
              className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{t('pot.guide.backToSelection')}</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-blue-400/30">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">{t('pot.teflon.title')}</h3>
                <p className="text-white text-xl">{t('pot.teflon.guideSubtitle')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 推荐菜谱 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">推荐菜谱</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Utensils className="w-6 h-6 text-blue-400" />
                    <h5 className="text-xl font-bold text-white">煎烙类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 鱼</p>
                    <p>• 豆腐</p>
                    <p>• 鸡蛋</p>
                    <p>• 猪肝</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                    <h5 className="text-xl font-bold text-white">滑炒类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 滑蛋虾仁</p>
                    <p>• 清炒鱼片</p>
                    <p>• 炒河粉</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Eye className="w-6 h-6 text-indigo-400" />
                    <h5 className="text-xl font-bold text-white">酱汁类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 糖醋里脊</p>
                    <p>• 鱼香肉丝</p>
                    <p>• 麻婆豆腐</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用须知 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">使用须知</h4>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
                <h5 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-7 h-7 text-red-400 mr-3" />
                  涂层保护是核心
                </h5>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-red-500/30 rounded-lg flex items-center justify-center mb-4">
                      <XCircle className="w-6 h-6 text-red-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">严禁金属厨具</h6>
                    <p className="text-white/90">严禁使用任何金属或硬质厨具（如钢铲、钢丝球），请务必选用硅胶或木质厨具。</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-orange-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">避免尖锐食材</h6>
                    <p className="text-white/90">请勿烹饪带尖锐硬壳的食材（如螃蟹、花甲），避免翻炒过程中的碰撞造成涂层划伤。</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mb-4">
                      <Flame className="w-6 h-6 text-yellow-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">避免空烧</h6>
                    <p className="text-white/90">长时间干烧会永久性损伤不粘涂层。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 清洁与保养 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">清洁与保养 — 延长涂层寿命</h4>
              </div>

              <div className="space-y-8">
                {/* 日常清洁 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-6">日常清洁</h5>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <h6 className="font-bold text-white">温和清洗</h6>
                        </div>
                        <p className="text-white text-sm">待锅体自然冷却后，可选用普通洗洁精；亦或用海绵或软布配合温水清洗。</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <h6 className="font-bold text-white">严防温差冲击</h6>
                        </div>
                        <p className="text-white text-sm">严禁在锅体高温状态下用冷水直接冲洗，巨大的温差是涂层的"隐形杀手"。若需在热锅状态下清洗，请务必使用热水。</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <h6 className="font-bold text-white">污渍处理</h6>
                        </div>
                        <p className="text-white text-sm">若有顽固污渍，用温水浸泡，切勿强行刮擦。</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <h6 className="font-bold text-white">避免强力水冲</h6>
                        </div>
                        <p className="text-white text-sm">禁止使用设备自带的水枪式喷头直接对锅内进行冲洗，这会加速涂层的老化。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 定期检查 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <h5 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-7 h-7 text-blue-400 mr-3" />
                    定期检查
                  </h5>
                  <div className="bg-white/10 rounded-lg p-6">
                    <p className="text-white text-lg">
                      当涂层出现明显划痕或不粘性能显著下降时，为了最佳的烹饪效果和食品安全，
                      我们建议您<span className="text-orange-300 font-bold">联系返修或更换锅体</span>。
                    </p>
                  </div>
                </div>

                {/* 重要提示 */}
                <div className="bg-gradient-to-r from-red-600/40 to-pink-600/40 rounded-2xl p-6 border border-red-500/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <h6 className="text-xl font-bold text-white">重要提示</h6>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-300 text-2xl">❌</span>
                      </div>
                      <p className="text-white text-sm">禁用金属厨具</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-300 text-2xl">🌡️</span>
                      </div>
                      <p className="text-white text-sm">避免温差冲击</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-yellow-300 text-2xl">⚡</span>
                      </div>
                      <p className="text-white text-sm">禁止长时间空烧</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );

  // 耗材选购指南页面
  const renderSuppliesPage = () => (
    <>
      <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-purple-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">{t('supplies.title')}</h2>
            <p className="text-white text-xl">{t('supplies.subtitle')}</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-xl">
          <p className="text-xl text-white">
            {t('supplies.description')}
          </p>
        </div>
      </div>

      {/* 耗材分类 */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Settings className="w-7 h-7 text-purple-400 mr-3" />
            设备配件
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-bold text-white mb-3">密封圈组件</h4>
              <p className="text-white/90 mb-3">• 建议每6个月检查一次密封性能</p>
              <p className="text-white/90 mb-3">• 发现老化或破损应及时更换</p>
              <p className="text-purple-300">更换周期：12-18个月</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-white mb-3">过滤网组件</h4>
              <p className="text-white/90 mb-3">• 每月清洗一次，保持通风效果</p>
              <p className="text-white/90 mb-3">• 严重堵塞时需要更换新的过滤网</p>
              <p className="text-blue-300">更换周期：6-12个月</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ChefHat className="w-7 h-7 text-orange-400 mr-3" />
            烹饪用具
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <h4 className="text-xl font-bold text-white mb-3">硅胶厨具套装</h4>
              <p className="text-white/90 mb-3">• 专用于特氟龙不粘锅的安全厨具</p>
              <p className="text-white/90 mb-3">• 包含铲子、汤勺、夹子等工具</p>
              <p className="text-orange-300">建议备用：1-2套</p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
              <h4 className="text-xl font-bold text-white mb-3">木质厨具套装</h4>
              <p className="text-white/90 mb-3">• 适用于氮化铁锅的传统厨具</p>
              <p className="text-white/90 mb-3">• 天然材质，不损伤锅体表面</p>
              <p className="text-green-300">建议备用：1套</p>
            </div>
          </div>
        </div>
      </div>

      {/* 购买建议 */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <CheckCircle className="w-7 h-7 text-green-400 mr-3" />
          购买建议
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-xl font-bold text-white mb-4">正品渠道</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 拾光科技官方商城</li>
              <li>• 授权经销商门店</li>
              <li>• 官方客服推荐渠道</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-bold text-white mb-4">质量保证</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 原厂配件保证兼容性</li>
              <li>• 严格质检标准</li>
              <li>• 质量问题包换服务</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-400/30">
            <h4 className="text-xl font-bold text-white mb-4">售后服务</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 专业安装指导</li>
              <li>• 使用培训服务</li>
              <li>• 定期保养提醒</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 更换提醒 */}
      <div className="bg-gradient-to-r from-yellow-600/40 to-orange-600/40 rounded-3xl p-8 border border-yellow-500/50">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white">更换提醒</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">何时更换</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 密封圈出现老化、变硬或开裂</li>
              <li>• 过滤网严重堵塞，清洗后效果不佳</li>
              <li>• 厨具出现磨损或损坏</li>
              <li>• 设备性能明显下降</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">联系方式</h4>
            <div className="space-y-3 text-white/90">
              <p><span className="text-yellow-300 font-bold">客服热线：</span>400-XXX-XXXX</p>
              <p><span className="text-yellow-300 font-bold">在线客服：</span>官网在线咨询</p>
              <p><span className="text-yellow-300 font-bold">服务时间：</span>周一至周日 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:30px_30px] md:bg-[length:50px_50px]"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

      {/* 主要内容区域 */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-20">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'video' && (
          <>
            {/* 返回按钮 */}
            <div className="py-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>返回首页</span>
              </button>
            </div>
            {renderVideoPage()}
          </>
        )}
        {currentPage === 'installation' && (
          <>
            {/* 返回按钮 */}
            <div className="py-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-green-300 hover:text-white transition-colors duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>返回首页</span>
              </button>
            </div>
            {renderInstallationPage()}
          </>
        )}
        {currentPage === 'potGuide' && (
          <>
            {/* 返回按钮 */}
            {!selectedPot && (
              <div className="py-6">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center space-x-2 text-orange-300 hover:text-white transition-colors duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>返回首页</span>
                </button>
              </div>
            )}
            {renderPotGuidePage()}
          </>
        )}
        {currentPage === 'supplies' && (
          <>
            {/* 返回按钮 */}
            <div className="py-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>返回首页</span>
              </button>
            </div>
            {renderSuppliesPage()}
          </>
        )}

        {/* 底部信息 */}
        {currentPage !== 'home' && (
          <footer className="text-center mt-20 pt-10 border-t border-white/10">
            <div className="text-white/60 text-lg font-light space-y-3 tracking-wide">
              <p className="text-xl font-medium">{t('common.copyright')}</p>
              <p>{t('common.contact')}</p>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}
