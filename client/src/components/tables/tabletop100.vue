<template>
	<div class="col-12 pd-075">
		<div class="card-vue bg-white p-md-2" style="overflow: auto;">
			<div class="row">
				<div class="col-12 cv-header pl-3">
					<span class="title">{{ table.title }} </span>
				</div>
				<div class="col-12 pt-2 pl-3 pr-md-0 cv-middle" style="overflow: visible;">
					<table class="table" :id="table.id">
						<thead>
							<tr class="table-l">
								<th class="thSticky"><div class="stickyBorder"></div>A</th>
								<th class="thSticky"><div class="stickyBorder"></div>B</th>
								<th class="thSticky"><div class="stickyBorder"></div>B</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-l">
								<td>A</td>
								<td>B</td>
								<td>B</td>
							</tr>
							<tr class="table-l">
								<td>A</td>
								<td>Bs</td>
								<td>Bs</td>
							</tr>
							<tr class="table-l">
								<td>AA</td>
								<td>BC</td>
								<td>B</td>
							</tr>
						</tbody>
						<tfoot>
							<tr class="table-l">
								<td>A</td>
								<td>B</td>
								<td>B</td>
							</tr>
						</tfoot>
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
	const $ = jQuery;
	DataTable.$ = $;
	$.fn.dataTable = DataTable;

	export default {
		data: function() { return {
			table: {
				id: 'tophundred',
				title:'TOP 100',
				subtitle: '',
				data: []
			},
			config: {
				bPaginate: false,
				pageLength: 14,
				bLengthChange: false,
				bFilter: true,
				aaSorting: [[ 1, "asc" ]],
				bInfo: false,
				bAutoWidth: false,
				searching: false,
				responsive: false,
				//aoColumnDefs: [
				//	{ "bSortable": false, "aTargets": [0] }
				//]
			}
		}},
		methods: {
			startDataTb: function(id, config, table){
				var speed = 400/(table.data.length);
				$(document).ready(function() {
					$("table tr").hide();
					$("table tr").each(function(index){
						$(this).delay(index*speed).show(600);
					});
					$('#'+id).DataTable(config);
					return true;
				});
			},
			reRenderTable(){
				if (this.table.id == 'tophundred') {
					this.table.id = 'tophundred_';
				} else {
					this.table.id = 'tophundred';
				}
			},
			dateFormat(dt){
				if(dt == undefined) return '-';
				var date = dt.split('-');
				return date[2]+'/'+date[1]+'/'+date[0];
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
		#tophundred_filter, #tophundred__filter {
			position: relative;
			z-index: 3;
			margin-top: -30px;
			right: 35%;
			font-size: 11px;
		}
		#tophundred_paginate, #tophundred__paginate {
			float: left; 
			margin-left: -5%; 
			font-size: 75%; 
			margin-top: 5px;
		}
		.paginate_button { padding: 2px; }
		.page-link { padding: 6px 10px 6px 10px; color: #000; }
	}
	@media only screen and (max-device-width: 900px) {
		#tophundred_filter, #tophundred__filter {
			display: none;
		}
		.cv-middle {
			overflow-x: scroll;
		}
	}
	.table {
		margin-bottom: 0;
		border-bottom: 0px solid #ddd;
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