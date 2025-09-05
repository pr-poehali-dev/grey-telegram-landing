import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const telegramUrl = "https://t.me/your_channel"; // Замени на реальную ссылку

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Фоновое изображение заката */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/c9212041-ec8b-408f-a663-abc6fca7101d.jpg)',
        }}
      >
        {/* Градиентный оверлей для лучшей читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full space-y-8 text-center">
          
          {/* Логотип/иконка телеграм */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <Icon name="Send" size={36} className="text-white" />
            </div>
          </div>

          {/* Заголовок */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Просто Саня
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
              Телеграм канал
            </p>
          </div>

          {/* Описание канала */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                О канале
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Личный блог о жизни, мыслях и повседневности автора. 
                Здесь я делюсь своими размышлениями, историями из жизни, 
                интересными находками и просто тем, что происходит каждый день. 
                Добро пожаловать в мой мир!
              </p>
              
              {/* Кнопка перехода в телеграм */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open(telegramUrl, '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Подписаться на канал
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Контакты для поддержки */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <Icon name="Phone" size={20} className="mr-2" />
                Поддержка
              </h3>
              <p className="text-gray-600 mb-2">
                Есть вопросы или предложения?
              </p>
              <a 
                href="tel:+79521426352" 
                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                +7 (952) 142-63-52
              </a>
            </CardContent>
          </Card>

          {/* Дополнительная информация */}
          <div className="text-center text-gray-300 text-sm">
            <p>© 2024 Просто Саня. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  );
}