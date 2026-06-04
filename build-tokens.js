import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// sd-transforms의 변환들을 StyleDictionary에 등록
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['src/assets/design/tokens.json'], // Figma에서 받은 토큰 파일 경로
  preprocessors: ['tokens-studio'],          // ★ 이거 빠지면 에러납니다 (아래 설명)
  platforms: {
    css: {
      transformGroup: 'tokens-studio',       // 색/간격/타이포 변환 + 수식 계산까지 포함
      transforms: ['name/kebab'],            // --like-this 형태로 변수명 생성
      buildPath: 'src/assets/design/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
