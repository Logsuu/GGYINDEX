/**
 * 特氟龙不粘锅详情页面
 * 展示特氟龙不粘锅的完整使用指南和注意事项
 */
import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, ChefHat, AlertTriangle, Sparkles, Eye, Utensils, Clock } from 'lucide-react';

/**
 * 特氟龙不粘锅详情组件
 */
export default function TeflonPot() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:60px_60px]"></div>
      
      {/* 顶部导航 */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-orange-300 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>返回选择页面</span>
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">特氟龙不粘锅</h1>
              <p className="text-orange-300 text-lg">Teflon Non-stick Pot</p>
            </div>
          </div>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            专为处理"娇嫩"食材设计，让不粘锅、保品相变得无比轻松
          </p>
        </div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {/* 推荐菜谱 */}
          <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <ChefHat className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">推荐菜谱</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Utensils className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">煎烙类</h3>
                </div>
                <div className="space-y-2 text-white/90">
                  <p>• 鱼</p>
                  <p>• 豆腐</p>
                  <p>• 鸡蛋</p>
                  <p>• 猪肝</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">滑炒类</h3>
                </div>
                <div className="space-y-2 text-white/90">
                  <p>• 滑蛋虾仁</p>
                  <p>• 清炒鱼片</p>
                  <p>• 炒河粉</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Eye className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">酱汁类</h3>
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
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold text-white">使用须知</h2>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-7 h-7 text-red-400 mr-3" />
                涂层保护是核心
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-500/30 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">严禁金属厨具</h4>
                  <p className="text-white/90">严禁使用任何金属或硬质厨具（如钢铲、钢丝球），请务必选用硅胶或木质厨具。</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">避免尖锐食材</h4>
                  <p className="text-white/90">请勿烹饪带尖锐硬壳的食材（如螃蟹、花甲），避免翻炒过程中的碰撞造成涂层划伤。</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">避免空烧</h4>
                  <p className="text-white/90">长时间干烧会永久性损伤不粘涂层。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 清洁与保养 */}
          <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">清洁与保养</h2>
              <span className="text-blue-300 text-lg">— 延长涂层寿命</span>
            </div>

            <div className="space-y-8">
              {/* 日常清洁 */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">日常清洁</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500/50 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <h4 className="font-bold text-white">温和清洗</h4>
                      </div>
                      <p className="text-white/90 text-sm">待锅体自然冷却后，可选用普通洗锅；亦或用海绵或软布配合温水清洗。</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-red-500/50 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <h4 className="font-bold text-white">严防温差冲击</h4>
                      </div>
                      <p className="text-white/90 text-sm">严禁在锅体高温状态下用冷水直接冲洗，巨大的温差是涂层的"隐形杀手"。若需在热锅状态下清洗，请务必使用热水。</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-yellow-500/50 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <h4 className="font-bold text-white">污渍处理</h4>
                      </div>
                      <p className="text-white/90 text-sm">若有顽固污渍，用温水浸泡，切勿强行刮擦。</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-purple-500/50 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <h4 className="font-bold text-white">避免强力水冲</h4>
                      </div>
                      <p className="text-white/90 text-sm">禁止使用设备自带的水枪式喷头直接对锅内进行冲洗，这会加速涂层的老化。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 定期检查 */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="w-7 h-7 text-orange-400 mr-3" />
                  定期检查
                </h3>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-white/90 text-lg">
                    当涂层出现明显划痕或不粘性能显著下降时，为了最佳的烹饪效果和食品安全，
                    我们建议您<span className="text-orange-300 font-bold">联系返修或更换锅体</span>。
                  </p>
                </div>
              </div>

              {/* 重要提示 */}
              <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 rounded-2xl p-6 border border-red-500/50">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-white">重要提示</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-300 text-2xl">❌</span>
                    </div>
                    <p className="text-white/90 text-sm">禁用金属厨具</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-300 text-2xl">🌡️</span>
                    </div>
                    <p className="text-white/90 text-sm">避免温差冲击</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-yellow-300 text-2xl">⚡</span>
                    </div>
                    <p className="text-white/90 text-sm">禁止长时间空烧</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 返回按钮 */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            返回产品选择
          </button>
        </div>
      </main>
    </div>
  );
}
