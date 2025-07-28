package com.ghalistan.infishmentmobile.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.ghalistan.infishmentmobile.databinding.ItemInfoPromoBinding

class HomeInfoPromoAdapter : RecyclerView.Adapter<HomeInfoPromoAdapter.HomeInfoPromoViewHolder>() {
    class HomeInfoPromoViewHolder(itemView: ItemInfoPromoBinding) : RecyclerView.ViewHolder(itemView.root) {
        fun bind() {
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): HomeInfoPromoViewHolder {
        val view = ItemInfoPromoBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return HomeInfoPromoViewHolder(view)
    }

    override fun onBindViewHolder(holder: HomeInfoPromoViewHolder, position: Int) {

    }

    override fun getItemCount(): Int = 3
}