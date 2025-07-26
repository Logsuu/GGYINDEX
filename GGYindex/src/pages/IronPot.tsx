/**
 * 氮化铁锅详情页面
 * 展示氮化铁锅的完整使用指南和注意事项
 */
import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Flame, ChefHat, AlertTriangle, Sparkles, Clock, Droplets, Shield } from 'lucide-react';

/**
 * 氮化铁锅详情组件
 */
export default function IronPot() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:60px_60px]"></div>
      
      {/* 顶部导航 */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 group"
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">氮化铁锅</h1>
              <p className="text-blue-300 text-lg">Nitrided Iron Wok</p>
            </div>
          </div>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            为追求极致"锅气"而生，是中式爆炒、烧焖的灵魂之选
          </p>
        </div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {/* 推荐菜谱 */}
          <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <ChefHat className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">推荐菜谱</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Flame className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-bold text-white">爆炒类</h3>
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
                  <h3 className="text-xl font-bold text-white">烧焖类</h3>
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
                  <h3 className="text-xl font-bold text-white">干煸类</h3>
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
              <h2 className="text-2xl font-bold text-white">使用须知</h2>
            </div>

            <div className="space-y-8">
              {/* 控制火候与空烧 */}
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-4">控制火候与空烧</h3>
                <div className="space-y-4 text-white/90">
                  <p>铁锅导热快，建议用中小火预热，避免长时间空烧损伤锅体。炒菜前先将锅烧热再倒油，能有效增强物理不粘效果。</p>
                  <p>先用中小火烹饪（3到4档）再转至大火（5档或以上），直接大火容易让食物焦糊，且会损伤锅面。</p>
                </div>
              </div>

              {/* 粘锅应对技巧 */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-4">粘锅应对技巧</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-blue-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-blue-300 mb-2">高蛋白食材</h4>
                      <p className="text-white/80 text-sm">鸡蛋、嫩豆腐、鱼皮：掌握"热锅冷油"技巧，或对食材进行拍粉等预处理。</p>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-green-300 mb-2">姜片防粘</h4>
                      <p className="text-white/80 text-sm">若菜系涉及姜片，炒或炸前，用姜片擦拭热锅锅底。</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-yellow-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-300 mb-2">高淀粉食材</h4>
                      <p className="text-white/80 text-sm">土豆、山药：切好后用清水冲洗掉表面淀粉，并尽量沥干水分。</p>
                    </div>
                    <div className="bg-red-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-red-300 mb-2">高糖类菜系</h4>
                      <p className="text-white/80 text-sm">适当增加用油量，并快速翻炒。年糕、粉条类：炒前先过水使其表面湿润，并多放油快炒。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 生锈风险 */}
              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-4">生锈风险</h3>
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
              <h2 className="text-2xl font-bold text-white">养锅教程：让它成为您的"传家宝"</h2>
            </div>

            <div className="space-y-8">
              {/* 首次开锅 */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">第一步：首次开锅（至关重要）</h3>
                <p className="text-green-300 mb-6 font-medium">目的：去除工业防锈层，建立初始油膜，为日后的"物理不粘"打下坚实基础。</p>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-2">1. 洁锅</h4>
                    <p className="text-white/80 text-sm">流动温水下，用洗洁精和百洁布彻底洗净锅内外，擦干。</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Flame className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-2">2. 烘干</h4>
                    <p className="text-white/80 text-sm">将锅体安放回烹饪机内，选择"手动模式"，调至【3档】运行约1分钟。</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-2">3. 润锅</h4>
                    <p className="text-white/80 text-sm">倒入适量食用油，启动预设的开锅菜谱，低速运转约2分钟。</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-2">4. 静置</h4>
                    <p className="text-white/80 text-sm">待锅冷却后，用厨房纸巾擦净多余油分即可。</p>
                  </div>
                </div>
              </div>

              {/* 日常养锅 */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">第二步：日常养锅（简单，但需坚持）</h3>
                <p className="text-blue-300 mb-6 font-medium">目的：巩固并加厚油膜，让铁锅越用越黑亮、越用越不粘。</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Droplets className="w-6 h-6 text-blue-400" />
                      <h4 className="text-xl font-bold text-white">清洗</h4>
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
                      <h4 className="text-xl font-bold text-white">养护</h4>
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
                <h4 className="text-xl font-bold text-white mb-4">关于生锈</h4>
                <p className="text-white/90">万一出现锈迹，可用白醋或百洁布擦除，再完整执行一遍"首次开锅"流程，即可焕然一新。</p>
              </div>
            </div>
          </section>
        </div>

        {/* 返回按钮 */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            返回产品选择
          </button>
        </div>
      </main>
    </div>
  );
}
