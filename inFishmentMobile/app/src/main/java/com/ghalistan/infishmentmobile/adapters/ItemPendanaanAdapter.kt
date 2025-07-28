package com.ghalistan.infishmentmobile.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.ghalistan.infishmentmobile.databinding.ItemPendanaanBinding

class ItemPendanaanAdapter : RecyclerView.Adapter<ItemPendanaanAdapter.ViewHolder>() {
    class ViewHolder(itemView: ItemPendanaanBinding) : RecyclerView.ViewHolder(itemView.root) {
        fun bind() {
            val view = ItemPendanaanBinding.bind(itemView)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = ItemPendanaanBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {

    }

    override fun getItemCount(): Int = 4
}