<template>
	<div class="col-12 pd-075">
		<div class="card-vue bg-white p-md-2" style="overflow: auto;">
			<div class="row">
				<div class="col-12 cv-header pl-3">
					<span class="title">{{ table.title }} </span>
				</div>
				<div class="col-12 pt-2 pl-3 pr-md-0 cv-middle" style="overflow: visible;">
					<table class="table" :id="table.id" v-if="table.data.length > 0">
						<thead>
							<tr class="table-l">
								<th class="thSticky"><div class="stickyBorder"></div>ID</th>
								<th class="thSticky"><div class="stickyBorder"></div>Short</th>
								<th class="thSticky"><div class="stickyBorder"></div>URL</th>
								<th class="thSticky"><div class="stickyBorder"></div>Expires</th>
								<th class="thSticky"><div class="stickyBorder"></div>Count</th>
								<th class="thSticky"><div class="stickyBorder"></div><i class="fa fa-trash"></i></th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-l" v-for="row in table.data" :key="row.id">
								<td>{{ row.id }}</td>
								<td><a :href="baseurl+'/'+row.short" target="_blank" >{{ baseurl }}/{{ row.short }}</a></td>
								<td>{{ row.url }}</td>
								<td>{{ row.expires }}</td>
								<td>{{ row.count }}</td>
								<td><i class="fa fa-trash" @click="del(row.id)"></i></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import jQuery from 'jquery'
	import DataTable from 'datatables.net';
	import 'datatables.net-dt/css/jquery.dataTables.css'
	import urlsProvider from './../../provider/url.provider.js';
	const $ = jQuery;
	DataTable.$ = $;
	$.fn.dataTable = DataTable;

	export default {
		data: function() { return {
			config: {
				bPaginate: false,
				pageLength: 14,
				bLengthChange: false,
				bFilter: true,
				aaSorting: [[ 1, "asc" ]],
				bInfo: false,
				bAutoWidth: false,
				searching: false,
				responsive: false
			},
			baseurl: this.$store.state.baseurl
		}},
		computed: {
			table() { return this.$store.state.tablemyurls; }
		},
		methods: {
			startDataTb: function(id, config, table){
				var speed = 400/(table.data.length);
				$(document).ready(function() {
					$("table tr").hide();
					$("table tr").each(function(index){
						$(this).delay(index*speed).show(500);
					});
					$('#'+id).DataTable(config);
					return true;
				});
			},
			reRenderTable(){
				if (this.table.id == 'tablemyurls') {
					this.table.id = 'tablemyurls_';
				} else {
					this.table.id = 'tablemyurls';
				}
			},
			dateFormat(dt){
				if(dt == undefined) return '-';
				var date = dt.split('-');
				return date[2]+'/'+date[1]+'/'+date[0];
			},
			del(id) {
				const url = this.$store.state.api_dir + '/url/delete';
				if (confirm("You sure?")) {
					urlsProvider.deleteUrl(url, id);
				}
			}
		},
		created(){
			this.startDataTb(this.table.id, this.config, this.table);
		}
	}
</script>
<style scoped>
	.title {
		position: relative;
		bottom: 3px;
	}
	@media only screen and (min-device-width: 900px) {
		.cv-header {
			height: 20px;
		}
		#tablemyurls_filter, #tablemyurls__filter {
			position: relative;
			z-index: 3;
			margin-top: -30px;
			right: 35%;
			font-size: 11px;
		}
		#tablemyurls_paginate, #tablemyurls__paginate {
			float: left; 
			margin-left: -5%; 
			font-size: 75%; 
			margin-top: 5px;
		}
		.paginate_button { padding: 2px; }
		.page-link { padding: 6px 10px 6px 10px; color: #000; }
	}
	@media only screen and (max-device-width: 900px) {
		#tablemyurls_filter, #tablemyurls__filter {
			display: none;
		}
		.cv-middle {
			overflow-x: scroll;
		}
	}
	.table {
		margin-bottom: 0;
		border-bottom: 1px solid #ddd !important;
	}
	.table th {
		padding-left: 10px !important;
	}
	.table-l {
		word-wrap: normal !important;
		white-space: nowrap;
		transition: background 0.5s;
	}
	.table-l:hover {
		background: #e0f6ff;
		cursor: pointer;
	}
	.table tfoot {
		line-height: 1.5;
	}
	.table tfoot td {
		border-top: 1px solid #e6e6e6 !important;
		margin-left: 10px !important;
	}
	.table tfoot tr td {
		padding: 7px;
	}
	.thSticky { border-bottom: 0px; position: sticky; font-weight: 500 !important; ; }
	.table { font-size: 12px; }
	.col-12.pd-075 { padding: 0; margin: 0; }
	.card-vue { padding: 7px 10px 1px 10px; border: 0; margin: 0; }
	.card-vue .row { height: 100%; margin-right: 0; }
	.card-vue .cv-header { font-size: 13px; height: 20px; } 
	.card-vue .cv-header span { font-weight: 600; margin-left: 6px; }
</style>