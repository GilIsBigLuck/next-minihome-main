import { env } from "@/env";

/**
 * 이미지 URL을 처리하는 유틸리티 함수
 * 상대 경로인 경우 앱 URL을 붙여서 절대 경로로 변환
 * @param imgUrl - 이미지 URL (상대 경로 또는 절대 경로)
 * @returns 절대 경로 이미지 URL
 */
export function getImageUrl(imgUrl: string): string {
  // 이미 절대 경로인 경우 그대로 반환
  if (imgUrl.startsWith("http://") || imgUrl.startsWith("https://")) {
    return imgUrl;
  }

  // 상대 경로인 경우 앱 URL을 붙여서 반환
  const r2Url = env.NEXT_PUBLIC_R2_URL;
  
  // R2 URL이 설정되지 않은 경우 원본 URL 반환
  if (!r2Url) {
    return imgUrl;
  }
  
  const appUrl = r2Url.replace(/\/$/, ""); // 마지막 슬래시 제거
  const imagePath = imgUrl.startsWith("/") ? imgUrl : `/${imgUrl}`; // 슬래시가 없으면 추가

  return `${appUrl}${imagePath}`;
}


