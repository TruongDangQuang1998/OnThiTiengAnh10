package com.example.englishexampreparation.ui.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;


import com.example.englishexampreparation.R;
import com.example.englishexampreparation.ui.main.vocabulary.VocabularyFragment;

import butterknife.BindView;
import butterknife.ButterKnife;

public class HomeFragment extends Fragment {

    @BindView(R.id.cv_button_vocabulary)
    CardView cvVocabulary;

    @BindView(R.id.cv_button_grammar)
    CardView cvGrammar;

    @BindView(R.id.cv_button_practice)
    CardView cvPractice;

    @BindView(R.id.cv_button_exam)
    CardView cvExam;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_home, container, false);
        ButterKnife.bind(this,root);

        cvVocabulary.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                FragmentManager fragmentManager = getActivity().getSupportFragmentManager();
                FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
                fragmentTransaction.setReorderingAllowed(true);
                fragmentTransaction.replace(R.id.nav_home, VocabularyFragment.class,null);
                fragmentTransaction.addToBackStack(null);
                fragmentTransaction.commit();
            }
        });


        return root;
    }

}