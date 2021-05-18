package com.example.englishexampreparation.ui.main.exam;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.englishexampreparation.R;
import com.example.englishexampreparation.model.Exam;
import com.example.englishexampreparation.model.ExamList;

import java.util.List;

public class ExamAdapter extends RecyclerView.Adapter<ExamAdapter.ViewHolder> {
    Context context;
    List<Exam> examList;

    public ExamAdapter(Context context, List<Exam> movieList) {
        this.context = context;
        this.examList = movieList;
    }

    public void setMovieList(List<Exam> movieList) {
        this.examList = movieList;
        notifyDataSetChanged();
    }

    @Override
    public ExamAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_exam,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ExamAdapter.ViewHolder holder, int position) {
        holder.tvExamName.setText(examList.get(position).getName().toString());
        holder.tvDescription.setText(examList.get(position).getDescription().toString());
    }

    @Override
    public int getItemCount() {
        if(examList != null){
            return examList.size();
        }
        return 0;

    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvExamName,tvDescription;

        public ViewHolder(View itemView) {
            super(itemView);
            tvExamName = (TextView)itemView.findViewById(R.id.tvName);
            tvDescription = (TextView) itemView.findViewById(R.id.tvDescription);
        }
    }



//    private List<Exam> mExams;
//    private Context mContext;
//    private PostItemListener mItemListener;
//    public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{
//
//        public TextView tvName;
//        PostItemListener mItemListener;
//
//        public ViewHolder(View itemView, PostItemListener postItemListener) {
//            super(itemView);
//            tvName = itemView.findViewById(R.id.tvName);
//
//            this.mItemListener = postItemListener;
//            itemView.setOnClickListener(this);
//        }
//
//        @Override
//        public void onClick(View view) {
//            Exam item = getItem(getAdapterPosition());
//            this.mItemListener.onPostClick(item.getId());
//
//            notifyDataSetChanged();
//        }
//    }
//
//    public ExamAdapter(Context context, List<Exam> posts, PostItemListener itemListener) {
//        mExams = posts;
//        mContext = context;
//        mItemListener = itemListener;
//    }
//    @NonNull
//    @Override
//    public ExamAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
//
//        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_exam,parent,false);
//        ViewHolder viewHolder = new ViewHolder(view, this.mItemListener);
//        return viewHolder;
//    }
//
//    @Override
//    public void onBindViewHolder(@NonNull ExamAdapter.ViewHolder holder, int position) {
//        Exam item = mExams.get(position);
//        TextView textView = holder.tvName;
//        textView.setText(item.getDescription());
//    }
//
//    @Override
//    public int getItemCount() {
//        return mExams.size();
//    }
//    public void updateAnswers(List<Exam> items) {
//        mExams = items;
//        notifyDataSetChanged();
//    }
//
//    private Exam getItem(int adapterPosition) {
//        return mExams.get(adapterPosition);
//    }
//
//    public interface PostItemListener {
//        void onPostClick(long id);
//    }
    //====================================//
//    ExamAdapter(List<ExamList> mItemList){
//        this.itemsList = mItemList;
//    }
//
//    @Override
//    public ExamAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
//
//        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_exam,parent,false);
//        return new ViewHolder(view);
//    }
//
//    @Override
//    public void onBindViewHolder(ExamAdapter.ViewHolder holder, final int position) {
//        final Exam item = itemsList.get(position);
//        holder.name.setText(item.getName());
//        holder.description.setText(String.valueOf(item.getDescription()));
//
//    }
//
//    @Override
//    public int getItemCount() {
//        return itemsList.size();
//    }
//
//
//    class ViewHolder extends RecyclerView.ViewHolder{
//
//        public TextView name,description;
//        private LinearLayout itemLayout;
//
//        public ViewHolder(View itemView) {
//            super(itemView);
//            name = itemView.findViewById(R.id.tvName);
//            description = itemView.findViewById(R.id.tvDescription);
//            itemLayout =  itemView.findViewById(R.id.itemLayout);
//        }
//    }
}
