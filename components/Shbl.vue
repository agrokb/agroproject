<template>
    <div>
        <h3 class="subtitle is-3">白葉枯病</h3>
        <div class="dropdown" :class="{'is-active':active}" @click='active = !active ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>病因</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </div>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                    This is a link
                </a>
                </div>
            </div>
        </div>
        </br>
        <div class="dropdown mt-3 mb-3" :class="{'is-active':active}" @click='active = !active ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>生物農藥</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </div>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                    This is a link
                </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:false
        }
    },
}
</script>
