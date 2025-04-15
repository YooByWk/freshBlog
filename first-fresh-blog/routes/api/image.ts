interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

type FetchFunction = (url: string, options?: RequestOptions) => Promise<any>;

function createFetch(baseURL = "", defaultHeaders: Record<string, string> = {}): FetchFunction {
  return async function (url, options: RequestOptions = {}) {
    const fullURL = baseURL + url;
    const headers = { ...defaultHeaders, ...options.headers };
    const config: RequestOptions = { ...options, headers };

    try {
      const res = await fetch(fullURL, config);
      if (!res.ok) { throw new Error(`Error: ${res.status} ${res.statusText}`); }
      const data: any = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      throw new Error(`Failed to fetch ${fullURL}: ${err}`);
    }

  };
}

const apiFetch: FetchFunction = createFetch('http://localhost:3000/', {
  // "Content-Type": "application/json",
});

export async function uploadImage(file: File): Promise<any> {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const res = await apiFetch('image', {
      headers: {},
      method: "POST",
      body: formData
    });
    console.log(res, "이미지 업로드 성공");
    return res;
  } catch (err) {
    console.error('uploadImage Error: ', err);
  }
}