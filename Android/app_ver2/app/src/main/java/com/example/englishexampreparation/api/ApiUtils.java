package com.example.englishexampreparation.api;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class ApiUtils {
    public static final String BASE_URL = "http://192.168.1.12:44329/";

    public static ApiService getApiService() {
        return RetrofitClient.createService(ApiService.class);
    }
    public static AlertDialog.Builder showMessage(Context context, String title, String message) {
        return new AlertDialog.Builder(context).setMessage(title).setMessage(message).setPositiveButton("ĐÓNG", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });

    }

    public static boolean isNetworkAvailable(Context context) {
        ConnectivityManager connectivityManager
                = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = null;
        if (connectivityManager != null) {
            activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        }
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

}
