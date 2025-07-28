package com.ghalistan.infishmentmobile.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.Toast
import androidx.navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import coil.load
import com.ghalistan.infishmentmobile.R
import com.ghalistan.infishmentmobile.databinding.ItemRekomendasiProyekBinding
import com.ghalistan.infishmentmobile.models.ProyekModel

class HomeProyekAdapter(private val proyek: List<ProyekModel>) : RecyclerView.Adapter<HomeProyekAdapter.HomeViewHolder>() {
    class HomeViewHolder(itemView: ItemRekomendasiProyekBinding) : RecyclerView.ViewHolder(itemView.root) {
        fun bind(proyekData: ProyekModel) {
            val view = ItemRekomendasiProyekBinding.bind(itemView)
            view.ivProyek.load(proyekData.foto)
            view.tvNamaProyek.text = proyekData.nama
            view.tvHargaProyek.text = proyekData.harga.toString()
            view.itemView.setOnClickListener {
                Toast.makeText(itemView.context, proyekData.nama, Toast.LENGTH_SHORT).show()
                itemView.findNavController().navigate(R.id.goToDetailProyek)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): HomeViewHolder {
        val view = ItemRekomendasiProyekBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return HomeViewHolder(view)
    }

    override fun onBindViewHolder(holder: HomeViewHolder, position: Int) {
        val proyekData = proyek[position]
        holder.bind(proyekData)
    }

    override fun getItemCount(): Int = proyek.size
}