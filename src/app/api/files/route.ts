import { supabase } from '@/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const folder = req.nextUrl.searchParams.get('folder');

    const { data, error } = await supabase.storage.from('projects').list(folder || 'DevFlow');

    if (error) {
      console.error('Ошибка получения файлов:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: 'Файлы не найдены', fileUrls: [] }, { status: 404 });
    }

    console.log('Данные из Supabase:', data);

    // Генерация публичных ссылок
    const fileUrls = data.map((file) => {
      const { data: publicData, error: publicError } = supabase.storage
        .from('projects')
        .getPublicUrl(`${folder || 'DevFlow'}/${file.name}`);

      if (publicError) {
        console.error('Ошибка генерации публичной ссылки:', publicError);
        return null;
      }

      console.log('Публичная ссылка для файла:', file.name, publicData.publicUrl); // Отладочный вывод
      return publicData.publicUrl; // Правильное извлечение ссылки
    });

    return NextResponse.json({ fileUrls: fileUrls.filter(Boolean) }, { status: 200 });
  } catch (error) {
    console.error('Catch ошибка:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
