package com.example.englishexampreparation.api;

import android.text.TextUtils;

import com.google.gson.GsonBuilder;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient {

    private static final String IP = "192.168.1.12";
    public static final String API_BASE_URL = "https://" + IP + ":44329/";

    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

    private static Retrofit.Builder builder =
            new Retrofit.Builder()
                    .baseUrl(API_BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create(new GsonBuilder().setDateFormat("yyyy-MM-dd").create()));

    public static <S> S createService(Class<S> serviceClass) {
        return createService(serviceClass, null);
    }

    public static <S> S createService(
            Class<S> serviceClass, final String authToken) {
        if (!TextUtils.isEmpty(authToken)) {
            AuthenticationInterceptor interceptor =
                    new AuthenticationInterceptor(authToken);

            if (!httpClient.interceptors().contains(interceptor)) {
                httpClient.addInterceptor(interceptor);

                builder.client(httpClient.build());

            }
        }
        Retrofit retrofit = builder.build();
        return retrofit.create(serviceClass);
    }


//    private static Retrofit retrofit = null;
//
//    public static Retrofit getClient(String baseUrl) {
//        if (retrofit==null) {
//            retrofit = new Retrofit.Builder()
//                    .baseUrl(baseUrl)
//                    .addConverterFactory(GsonConverterFactory.create())
//                    .build();
//        }
//        return retrofit;
//    }
}
