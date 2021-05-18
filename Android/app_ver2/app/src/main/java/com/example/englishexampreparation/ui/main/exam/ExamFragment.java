package com.example.englishexampreparation.ui.main.exam;

import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.englishexampreparation.R;
import com.example.englishexampreparation.api.ApiService;
import com.example.englishexampreparation.api.ApiUtils;
import com.example.englishexampreparation.model.Exam;
import com.example.englishexampreparation.model.ExamList;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static android.content.ContentValues.TAG;

/**
 * A simple {@link Fragment} subclass.
 * create an instance of this fragment.
 */
public class ExamFragment extends Fragment {

    private List<Exam> mExams ;
    private ExamAdapter mAdapter;
    private RecyclerView mRecyclerView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_exam, container, false);
        mExams = new ArrayList<>();
        mRecyclerView = (RecyclerView) view.findViewById(R.id.recyclerview);
        LinearLayoutManager layoutManager = new LinearLayoutManager(view.getContext());
        mRecyclerView.setLayoutManager(layoutManager);
        mAdapter = new ExamAdapter(view.getContext(),mExams);
        mRecyclerView.setAdapter(mAdapter);
        loadList();
        //loadAnswers();

        // Add the following lines to create RecyclerView
//        mRecyclerExam = view.findViewById(R.id.recyclerview);
//
//        mExams = new ArrayList<Exam>();
//        callApiGetAllExam();
//        mExamAdapter = new ExamAdapter(mExams);
//
//        mRecyclerExam.setHasFixedSize(true);
//        mRecyclerExam.setLayoutManager(new LinearLayoutManager(view.getContext()));
//        mRecyclerExam.setItemAnimator(new DefaultItemAnimator());
//        mRecyclerExam.setAdapter(mExamAdapter);
        return view;


    }

    public void loadList(){
        Call<ExamList> call =ApiUtils.getApiService().getAllExamList();
        Log.d(TAG, call.request().url() + " Fail");
        call.enqueue(new Callback<ExamList>() {
            @Override
            public void onResponse(Call<ExamList> call, Response<ExamList> response) {
//                Toast.makeText(getActivity(),"Success",Toast.LENGTH_SHORT).show();
//                Log.d("TAG","Response = "+response.body().toString());
//                mAdapter.setMovieList(response.body().getExams());

                if (response.isSuccessful() && response.body() != null) {
                    ExamList examResponse = response.body();
                    if (examResponse != null) {
                        List<Exam> exams = response.body().getExams();
                        Log.d(TAG, exams.toString());
                    } else {
                        Log.d(TAG,response.message());
                        Toast.makeText(getActivity(),"Đã xảy ra lỗi khi truy vấn",Toast.LENGTH_SHORT).show();
                    }

                } else {
                    Log.d(TAG,response.message());
                    Toast.makeText(getActivity(),"Đã xảy ra lỗi khi truy vấn",Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onFailure(Call<ExamList> call, Throwable t) {

                Toast.makeText(getActivity(),"Error ",Toast.LENGTH_SHORT).show();
                Log.d("TAG","Response = "+t.toString());
            }
        });
    }

    public void loadAnswers() {
//        mService.getAllExam().enqueue(new Callback<List<Exam>>() {
//            @Override
//            public void onResponse(Call<List<Exam>> call, Response<List<Exam>> response) {
//                Toast.makeText(getActivity(),"Success",Toast.LENGTH_SHORT).show();
//                mExams = response.body();
//                Log.d("TAG","Response = "+mExams);
//                mAdapter.setMovieList(mExams);
//            }
//
//            @Override
//            public void onFailure(Call<List<Exam>> call, Throwable t) {
//                Toast.makeText(getActivity(),"Error",Toast.LENGTH_SHORT).show();
//                Log.d("TAG","Response = "+t.toString());
//            }
//        });
    }
}